import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CasasService } from 'src/app/service/casas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EstadoService } from 'src/app/service/estado.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-actualizar-casa',
  templateUrl: './actualizar-casa.component.html',
  styleUrls: ['./actualizar-casa.component.css']
})
export class ActualizarCasaComponent implements OnInit {

  public imagePreview!: SafeUrl;

  categorias: any[] = [];

  estados: any[] = [];

  idCasa!: number;

  casaObject: any;

  casa!: FormGroup;
  selectedFile: File | null = null;

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Archivo seleccionado:', this.selectedFile);
  }


  handleFileInput(event: any): void {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagePreview = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);
      };

      reader.readAsDataURL(file);

    }
    console.log(this.onSelectedFile(event));
  }

  baseUrl!: 'http://localhost:8000/';

  urlFotoTermporary!: '';

  constructor(
    private formBuilder: FormBuilder,
    private casaService: CasasService,
    private categoriaService: CategoriaService,
    private estadoService: EstadoService,
    private routeId: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private route: Router,
  ) { }

  ngOnInit(): void {

    this.getCasaById();

    this.getCategorias();

    this.getEstados();

    this.routeId.paramMap.subscribe(params => {
      this.idCasa = +params.get('id')!;
    })

    this.casa = this.formBuilder.group({
      urlFoto: [''],
      direccion: [''],
      costoAlquiler: [''],
      ancho: [''],
      largo: [''],
      numeroPisos: [''],
      descripcion: [''],
      capacidad: [''],
      idCategoria: [''],
      idEstado: [''],
    });
  }

  getCasaById() {
    const baseUrl = 'http://localhost:8000';
    const id = this.routeId.snapshot.paramMap.get('id');
    console.log(id)
    this.casaService.getCasaById(Number(id)).subscribe(
      response => {
        this.casaObject = response;
        this.casa.get('idCategoria')?.setValue(this.casaObject.idCategoria);
        this.casa.get('idEstado')?.setValue(this.casaObject.idEstado);

        this.casaObject.urlFoto = baseUrl + this.casaObject.urlFoto;
        console.log(this.casaObject)
      },
      error => {
        console.log(error);
      }
    )
  }

  actualizarCasa() {

    if (this.casa.valid) {

      const baseUrl = 'http://localhost:8000'; // Reemplaza esto con la URL base de tu servidor
      const imageUrl = baseUrl + '/storage/' + 'casas/disponibles/' + this.selectedFile!.name;

      const data = {
        urlFoto: imageUrl,
        direccion: this.casa.get('direccion')!.value,
        costoAlquiler: this.casa.get('costoAlquiler')!.value,
        ancho: this.casa.get('ancho')!.value,
        largo: this.casa.get('largo')!.value,
        numeroPisos: this.casa.get('numeroPisos')!.value,
        descripcion: this.casa.get('descripcion')!.value,
        capacidad: this.casa.get('capacidad')!.value,
        idCategoria: this.casa.get('idCategoria')!.value,
        idEstado: this.casa.get('idEstado')!.value,
      };

      console.log(data.urlFoto)


      this.casaService.actualizarCasa(this.casaObject.id, data).subscribe(
        (data) => {
          console.log(data);
          console.log("Casa actualizada");
          this.route.navigate(['/gestionar-casas']);

          // this.foto

          // Realizar acciones adicionales después de actualizar la casa, si es necesario
        },
        (error) => {
          console.error(error);
          // Manejar errores, si es necesario
        }
      );

    } else {
      console.log("Ha ocurrido un error!!!")
    }


  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe(
      (response) => {
        this.categorias = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getEstados() {
    this.estadoService.getEstados().subscribe(
      (response) => {
        this.estados = response;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
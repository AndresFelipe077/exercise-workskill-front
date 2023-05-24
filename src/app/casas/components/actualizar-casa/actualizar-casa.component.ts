import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  categorias: any[] = [];

  estados: any[] = [];

  idCasa!: number;

  casaObject: any;

  casa!: FormGroup;
  selected: File | null = null;

  baseUrl!: 'http://localhost:8000/';

  urlFotoTermporary!: '';

  constructor(
    private formBuilder: FormBuilder,
    private casaService: CasasService,
    private categoriaService: CategoriaService,
    private estadoService: EstadoService,
    private routeId: ActivatedRoute,

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
    this.casaService.actualizarCasa(this.casaObject.id, this.casaObject).subscribe(
      (data) => {
        console.log(data);
        console.log("Casa actualizada");
        // Realizar acciones adicionales después de actualizar la casa, si es necesario
      },
      (error) => {
        console.error(error);
        // Manejar errores, si es necesario
      }
    );
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
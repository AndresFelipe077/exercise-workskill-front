import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CasasService } from 'src/app/service/casas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EstadoService } from 'src/app/service/estado.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {

  casasForm: FormGroup = new FormGroup({});

  casas!: any[];

  categorias: any[] = [];

  estados: any[] = [];

  constructor(
    private _casasService: CasasService,
    private formBuilder: FormBuilder,
    private _categoriasService:CategoriaService,
    private _estadosService:EstadoService
  ) { }

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  ngOnInit(): void {

    this.getCategorias();
    this.getEstados();

    this.casasForm = this.formBuilder.group({
      urlFoto: ['', Validators.required],
      direccion: ['', Validators.required],
      costoAlquiler: ['', Validators.required],
      ancho: ['', Validators.required],
      largo: ['', Validators.required],
      numeroPisos: ['', Validators.required],
      descripcion: ['', Validators.required],
      capacidad: ['', Validators.required],
      idCategoria: ['Categoria', Validators.required],
      idEstado: ['Estado', Validators.required],
    })
  }

  crearCasa() {
    if (this.casasForm.valid) {
      const formData = new FormData();

      formData.append('urlFoto', this.selectedFile!);
      formData.append('direccion', this.casasForm.get('direccion')!.value);
      formData.append('costoAlquiler', this.casasForm.get('costoAlquiler')!.value);
      formData.append('ancho', this.casasForm.get('ancho')!.value);
      formData.append('largo', this.casasForm.get('largo')!.value);
      formData.append('numeroPisos', this.casasForm.get('numeroPisos')!.value);
      formData.append('descripcion', this.casasForm.get('descripcion')!.value);
      formData.append('capacidad', this.casasForm.get('capacidad')!.value);
      formData.append('idCategoria', this.casasForm.get('idCategoria')!.value);
      formData.append('idEstado', this.casasForm.get('idEstado')!.value);

      this._casasService.guardarCasas(formData).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
      )

    }
  }
  
  getCategorias()
  {
    this._categoriasService.getCategorias().subscribe(
      data => {
        this.categorias = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  getEstados()
  {
    this._estadosService.getEstados().subscribe(
      data => { 
        this.estados = data;
      }, 
      error => {
        console.log(error)
      }
    )
  }

}

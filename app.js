//const nombre = 'Valentin';
//localStorage.setItem('Almacenamiento',nombre);
//const nombreAlmacenamiento = localStorage.getItem('Almacenamiento');
//console.log(nombreAlmacenamiento);
//localStorage.removeItem('Almacenamiento')

const app = new Vue({
 
    el: '#app',
    data: {
        titulo: 'Gym Super Copado',
        tareas:[],
        nuevaTarea: ''
    },
   
    methods: {
        agregarTarea() {
           this.tareas.push({
            nombre: this.nuevaTarea,
            estado: 'Activo'
           })
           this.nuevaTarea = ''
           localStorage.setItem('gym-hard', JSON.stringify(this.tareas));
        },
        // editarTarea(index){
        //     this.tareas[index].estado =!this.tareas[index].estado;
        // },
        editarTarea(index) {
            if (this.tareas[index].estado === 'Activo') {
              this.tareas[index].estado = 'Inactivo';
            } else {
              this.tareas[index].estado = 'Activo';
            }
            localStorage.setItem('gym-hard', JSON.stringify(this.tareas));
          },          
        eliminarTarea(index) {
        this.tareas.splice(index,1);
        localStorage.setItem('gym-hard', JSON.stringify(this.tareas));
        }
    },
    created: function(){
      let datosBD = JSON.parse(localStorage.getItem('gym-hard'));
      if (datosBD === null){
        this.tareas = [];
      }else{
        this.tareas = datosBD;      
      }
    }
});
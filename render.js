class sortAlgoRender{
    constructor( canvas, ctx){
      this.canvas = canvas;
      this.ctx = ctx;
      this.list = [];
    }
    renderInitial(){
      for (var i = 0; i < 100; i++){
        this.ctx.beginPath();
        this.ctx.moveTo(i*10, 0);
        var x = Math.floor(Math.random()*625);
        this.ctx.strokeStyle = "rgb(114,137,218)";
        this.list.push(x);
        this.ctx.lineTo(i*10, x);
        this.ctx.lineWidth = 3.9;
        this.ctx.stroke();
      
      }
    }
    finish_render(){
      x = this.list;
      for (var i = 0; i < 100; i++){
        this.ctx.beginPath();
        this.ctx.moveTo(i*10, 0);
        this.ctx.lineTo(i*10, x[i]);
        this.ctx.lineWidth = 3.9;
        this.ctx.strokeStyle = "rgb(67,181,129)";
        this.ctx.stroke();
      }
  }
   clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    renderNew (x){
  
        for (var i = 0; i < 100; i++){
          this.ctx.beginPath();
        
          this.ctx.moveTo(i*10, 0);
          this.ctx.lineTo(i*10, x[i]);
          this.ctx.lineWidth = 3.9;
          this.ctx.stroke();
          
        
        }
      }
}
class bubbleSort{
 constructor(){
   this.fails  = 0;
 }
  sort(x, i){
                if (x[i] < x[i+1])
                {
                   var temp = x[i];
                   x[i] = x[i+1];
                   x[i+1] = temp;
                  this.fails = 0;
                }
                else{
                  this.fails ++;
                }
              
            return x; 
                  

  }


}




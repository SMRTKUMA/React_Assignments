function run(){
    val = document.getElementById("val").value;
    countHeads=flips(val);
    document.getElementById("results").innerHTML="Heads appear"+((countHeads/val)*100+"%of time");
    }
    function coinFlip()
    {
        return(Math.floor(Math.random()*2)===0)? 'Heads':'Tails';
    }
  function flips(N) {
    
    var countHead=0;
          for(var i=0;i<N;i++)
          {
              if((coinFlip()=='Heads'))
              {
                  countHead++;
              }
          }
        return countHead;
      
  }
function theBeatlesPlay(musicians, instruments){
        const artists = [];
            musicians.forEach((musician, index) => { 
                artists.push(`${musician} plays ${instruments[index]}`)
       
        })
        return artists;
    }
  
    
    
function johnLennonFacts(facts){
      let results =[];
      let i = 0;
      while(i < facts.length){
          results.push(facts[i] + "!!!")
          i++
      } 
      return results;   
  }

 
  
  
  




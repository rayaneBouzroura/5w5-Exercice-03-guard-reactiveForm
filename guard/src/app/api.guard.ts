import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const apiGuard: CanActivateFn = (route, state) => {
  let sweet = localStorage.getItem("sweet");
  let salty = localStorage.getItem("salty");
  console.log("guard used");
  console.log("sweet value :" + sweet);
  console.log("salty value :" + salty);

  //if rien cocher return water
  //else return true
  if (!sweet && !salty){
    return createUrlTreeFromSnapshot(route,['/eau']);
  }
  else if(!sweet && salty){
    return createUrlTreeFromSnapshot(route,['/sel']);
  }
  else if(sweet && !salty){
    return createUrlTreeFromSnapshot(route,['/bonbon']);
  }
  else{
    return true;

  }
};

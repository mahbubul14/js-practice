const names =  ['Harry', 'James', 'Potter', 'Mina', 'John']

for (title of names) {
      console.log(title);
   if(title === 'Mina'){
      console.log('James on the list')
      break;
   }
}
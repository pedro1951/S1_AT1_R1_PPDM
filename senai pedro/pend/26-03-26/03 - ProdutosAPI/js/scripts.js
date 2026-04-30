async function fetchProdutos(){
    try{
        const res = await fetch("http://localhost:3000/produtos")
        const produtos = res.json();

        console.log(produtos)
  }catch (error){
    console.log(error)
  }
}


async function createProdutos(){
    try{
        const res = await fetch("http://localhost:3000/produtos",{
            method: "post",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        const produtos = res.json();

        console.log(produtos)
    }catch (error) {
        console.log(error)
    }
}



async function updateProduto(id) {

     try{
        const res = await fetch(`"http://localhost:3000/produtos/${id}`,{
            method: "put",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        const produtos = res.json();

        console.log(produtos)
    }catch (error) {
        console.log(error)
    }
    
}



async function deleteProduto(id){

  try{
        const res = await fetch(`"http://localhost:3000/produtos/${id}`,{
            method: "delete"
        })
        const produtos = res.json();

        console.log(produtos)
    }catch (error) {
        console.log(error)
    }
    

}
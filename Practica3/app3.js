function verificarUsuario(usuario){
    return new Promise((resolve, reject) => 
    {
if (usuario ==="admin")
{
    resolve("Acceso concedido");
}else
{
reject("Acesso denegado");
}
    });
}
verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.log(err));
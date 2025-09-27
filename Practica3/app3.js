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
.then(aprobado => console.log(aprobado))
.catch(error => console.log(error));

verificarUsuario("Ivan")
.then(aprobado => console.log(aprobado))
.catch(error => console.log(error));
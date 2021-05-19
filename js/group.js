window.onload = function () { 
 let getInvitados = localStorage.getItem('invitado');
 let invitado = JSON.parse(getInvitados)
 console.log(invitado[0]);
 let groupName = document.getElementById('group_name')
 groupName.innerHTML = invitado[0].Grupo;
}
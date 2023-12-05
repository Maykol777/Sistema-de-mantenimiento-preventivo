from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


from .models import CustomUser


from itertools import cycle
import sys
# Create your views here.

def iniciar_sesion(request):
    if request.user.is_authenticated:
        return redirect('inicio_admin')
    
    if request.method == 'POST':
        rut = request.POST['rut']
        password = request.POST['password']
        user = authenticate(request, rut=rut, password=password)
        
        if user is not None:
            login(request, user)
            
            if request.user.cargo == 'administrador':
                return redirect('inicio_admin')
            elif request.user.cargo == 'usuario':
                pass
            
        else:
            messages.error(request, 'el rut o contraseña son incorrectos')
            return redirect('iniciar_sesion')

    
    return render(request, 'iniciar_sesion.html')


def cerrar_sesion(request):
    if request.user != None:
        logout(request)
        return redirect('/')


def recuperar_contrasenia(request):
    pass



def crear_usuario(request):
    # Generador de rut: https://jqueryrut.sourceforge.net/generador-de-ruts-chilenos-validos.html
    if request.method == 'POST':
        print(request.POST)
        nombre_usuario = request.POST['nombre-usuario']
        nombre = request.POST['nombre']
        apellido = request.POST['apellido']
        rut = request.POST['rut']
        correo = request.POST['correo']
        contrasenia = request.POST['contrasenia']
        cargo = request.POST['cargo']
        institucion_id = request.POST['institucion']
        
        personas_con_rut = CustomUser.objects.filter(rut=rut)
        
         # Verificar si ya existe un usuario con el mismo nombre de usuario
        if CustomUser.objects.filter(username=nombre_usuario).exists():
            messages.error(request, 'El nombre de usuario ya existe')
            return redirect('lista_usuarios')

        if personas_con_rut.exists():
            messages.error(request, 'El Rut ya existe')
            return redirect('lista_usuarios')
        
        validar_rut = verificar_rut(rut)
        if validar_rut == False:
            messages.error(request, 'El rut ingresado es invalido.')
            return redirect('lista_usuarios')
        

        

        #if CustomUser.objects.filter(correo = correo).exists():
         #    messages.error(request, 'Correo electronico ya registrado')
          #   return redirect('lista_usuarios')
        
    

        

        
        try:
            usuario = CustomUser.objects.create(
            username=nombre_usuario,
            first_name=nombre,
            last_name=apellido,
            rut=rut,
            email=correo,
            cargo=cargo,
            password=contrasenia,
            institucion_id=institucion_id
            )
            usuario.set_password(contrasenia)
            usuario.save()
        except Exception as e:
            print(e)
        
        
        
        
        messages.success(request, 'Usuario creado con exito.')
        return redirect('lista_usuarios')
    
    
    
def verificar_rut(rut):
    #https://www.lawebdelprogramador.com/codigo/Python/3532-Valida-Rut-Chile.html
	rut = rut.upper()
	rut = rut.replace("-","")
	rut = rut.replace(".","")
	aux = rut[:-1]
	dv = rut[-1:]
 
	revertido = map(int, reversed([c for c in aux if c.isdigit()]))
	factors = cycle(range(2,8))
	s = sum(d * f for d, f in zip(revertido,factors))
	res = (-s)% 11
 
	if str(res) == dv:
		return True
	elif dv=="K" and res==10:
		return True
	else:
		return False



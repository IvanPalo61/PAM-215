import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DataBaseService';
export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

 
  async initialize() {
    await DatabaseService.initialize();
  }

async obtenerUsuarios() {
  try {
    const data = await DatabaseService.getAll();
    return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw new Error('No se pudieron cargar los usuarios');
  }
}


async crearUsuario(nombre) {
  try {
    
    Usuario.validar(nombre);

    
    const nuevoUsuario = await DatabaseService.add(nombre.trim());

    
    this.notifyListeners();

    // 4. Retornar usuario creado
    return new Usuario({
      id: nuevoUsuario.id,
      nombre: nuevoUsuario.nombre,
      fecha_creacion: nuevoUsuario.fecha_creacion
    });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
}
// Sistema de observadores para actualizar la vista automáticamente
addListener(callback) {
  this.listeners.push(callback);
}

removeListener(callback) {
  this.listeners = this.listeners.filter(l => l !== callback);
}

notifyListeners() {
  this.listeners.forEach(callback => callback());
}
}
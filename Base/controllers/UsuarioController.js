import { Usuario } from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar la BD
    async initialize() {
        await DatabaseService.initialize();
    }

    // Obtener todos los usuarios
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    // Crear usuario
    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            this.notifyListeners(); // 🔔 actualiza la vista automáticamente

            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    // 🔹 NUEVO: Actualizar usuario
    async actualizarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);

            const usuarioActualizado = await DatabaseService.update(id, nombre.trim());

            this.notifyListeners(); // 🔔 actualiza la vista

            return new Usuario(
                usuarioActualizado.id,
                usuarioActualizado.nombre,
                usuarioActualizado.fecha_creacion || new Date().toISOString()
            );
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw new Error('No se pudo actualizar el usuario');
        }
    }

    // 🔹 NUEVO: Eliminar usuario
    async eliminarUsuario(id) {
        try {
            await DatabaseService.delete(id);

            this.notifyListeners(); // 🔔 actualiza la vista

            return true;
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw new Error('No se pudo eliminar el usuario');
        }
    }

    // 🔔 Sistema Observer (para refrescar la vista cuando cambia la BD)
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

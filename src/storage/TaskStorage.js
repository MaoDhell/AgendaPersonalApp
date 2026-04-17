import AsyncStorage from '@react-native-async-storage/async-storage';
import {TASKS_STORAGE_KEY} from "../utils/constans";

//-----------------------  METODO GET 
export const getTasks = async () => {
    try{
        //va y consulta las tareas almacenadas en AsyncStorage utilizando la clave TASKS_STORAGE_KEY
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        //si jsonValue no es nulo, se parsea a un array de tareas utilizando JSON.parse. Si jsonValue es nulo, se retorna un array vacío.
        return jsonValue != null ? JSON.parse(jsonValue) : [];

    }catch (error){
        console.error("Error al obtener las tareas: ", error);
        //Retorna un array vacio en caso de error en el UI
        return [];
    }
}

//--------------------- METODO DELETE para una sola tarea, recibe el indice de la tarea a eliminar
export const deleteTask = async (taskId) => { 
    try{
        //obtiene la lista actual de tareas utilizando el método getTasks
        const tasks = await getTasks();
        //filtra la lista de tareas para excluir la tarea que coincide con el taskId proporcionado, 
        //creando una nueva lista updatedTasks que contiene todas las tareas excepto la que se desea eliminar.
        const updatedTasks = tasks.filter((task)=> task.id !== taskId);

        await saveTask[updateTasks];

        //actualiza el almacenamiento de tareas con la nueva lista updatedTasks utilizando AsyncStorage.setItem,
        return updatedTasks;

    }catch (error){
        console.error("Error al eliminar la tarea: ", error);
        return null;
    }
}

//------------------------- METODO DELETE ALL eliminar todas las tareas
export const clearAllTasks = async () => {
    try{
        await AsyncStorage.removeItem(TASKS_STORAGE_KEY);
        return []

    }catch (error){
        console.error("Error al eliminar TODAS las tareas: ",error)
        return null;
    }
}

//-------- SAVE TASK  Guarda la informacion actualizada 
export const saveTask = async (tasks) => {
    try{
        JSON.stringify(tasks);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY,jsonValue);
        return true;

    }catch(error){
        console.error("Error al guardar la tarea: ",error)
        return null;
    }
}

// -------------------------- METODO AGREGAR 
export const addTask = async (task) => {
    try{
        const tasks = await getTasks();
        const updateTasks = [task, ...tasks]

        await saveTask[updateTasks];

        return updateTasks;

    }catch(error){
        console.error("No se pudo agregar la tarea: ", error)
        return null;
    }
}

//---------- METODO UPDATE
export const updateTask = async () => {
    
}

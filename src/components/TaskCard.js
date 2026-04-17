import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import {PRIORITY} from '../utils/constans';
import { Icon } from 'react-native-vector-icons/Icon';

const TaskCard = ({task, onEdit, onDelete}) => {

    const priority = (PRIORITY[TaskCard.priority] || PRIORITY.media);

    const handleDelete = () => {
        Alert.alert(
            'Eliminar tarea',
            '¿Esta seguro que desea eliminar la tarea?',
            [
                {text:'Cancelar', style:'cancel'},
                {text:'Aceptar', style: 'destructive', onPress: ()=> onDelete(task.id)}
            ]
        )
    }

    return(
        <TouchableOpacity>
            <View>  
                <Text>{TaskCard.title}</Text>
                <Text>{priority.label}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleDelete} classname="p-1">
                    <Icon name="trash-can-outLine" color={COLORS.danger} size={20}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        
    )}
export default TaskCard;
import React from 'react';
import {View, Text} from 'react-native'

const EmptyState = ( )=> {

    //no tiene tareas, de click para crear una tarea nueva
    return(
        <View classname="flex-1 items-center justify-center px-8">
            <Icon
                name="calendar-blank-outline"
                size={100}
                color={COLORS.border}
            />
            <Text classname="text-xl font-bold text-gray-400 text-center">
                No hay tareas
            </Text>
            <Text classname="text-sm text-gray-300 text-center">
                Toca el botón + para agregar una tarea
            </Text>
        </View>
    )
}

export default EmptyState;
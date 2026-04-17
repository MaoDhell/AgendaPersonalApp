import React from 'react';
import {View, Text} from 'react-native'

const EmptyState = ( )=> {

    //no tiene tareas, de click para crear una tarea nueva
    return(
        <View>
            <Icon />
            <Text>No hay tareas</Text>
        </View>
    )

}

export default EmptyState;
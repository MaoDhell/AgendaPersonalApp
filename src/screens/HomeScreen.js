import {React, useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/native';

import {COLORS} from '../utils/constans'

import TaskCard from '../components/TaskCard';
import EmptyState from '../components/EmptyState';
import { getTasks, deleteTask } from '../storage/TaskStorage';


const HomeScreen = () => {



    return(
        
    )
}

export default HomeScreen;
import React from 'react';
import { View } from 'react-native'; 
import Text from '@components/Text';

export const PendingView = () => (
    <View
      style={{
        flex: 1,
        minWidth: '100%',
        flexGrow: 1,
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      }}
    >
      <Text style={{
        fontSize: 50,
      }}>Zapínání kamery...</Text>
    </View>
);
import React, { Component, useState } from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

export const UIBanner =() => {
    let [visible, setVisible ] = useState(true)

    return (
        <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(true),
          },
        ]}
        icon={({ size }) =>
          <Image
            source={{ uri: 'https://picsum.photos/400' }}
            style={{
              width: size,
              height: size,
            }}
          />
          
        }
      >
        ABC
      </Banner>
    );
  
}

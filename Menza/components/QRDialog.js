import {View} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {Dialog, Divider, Paragraph, Portal, useTheme} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

const QRDialog = ({hideDialog, clearData, qrMeal, qrDay, visible}) => {
  const {colors} = useTheme();

  useEffect(() => {
    return () => clearData();
  }, []);

  return (
    <View>
      <Portal>
        <Dialog
          style={{paddingBottom: 10, borderRadius: 15}}
          visible={visible}
          onDismiss={() => {
            hideDialog();
          }}>
          <View>
            <Dialog.Title style={{textAlign: 'center'}}>
              {qrMeal.name}
            </Dialog.Title>
            <Divider
              style={{
                backgroundColor: colors.onSurface,
                marginTop: 10,
                marginBottom: 20,
              }}
            />
          </View>
          <Dialog.Content
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <QRCode
              value={`UserId: ${
                auth().currentUser.uid
              }\n Date: ${qrDay.date.toDate()}\n MealId: ${qrMeal.mealID}`}
              backgroundColor="transparent"
              color="black"
              size={200}
            />
            <Paragraph style={{marginTop: 15}}>{qrMeal.nutrients}</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default QRDialog;

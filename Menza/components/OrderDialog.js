import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Divider, useTheme } from 'react-native-paper';
import { addToOrder } from '../functions/database/addToOrder';

const OrderDialog = ({ visible, hideDialog, clearData, currentMealData, currentDayData, user }) => {

    const { colors } = useTheme();

    return (
        <View >
            <Portal >
                <Dialog style={{ borderRadius: 15, height: '60%' }} visible={visible}
                    onDismiss={() => {
                        hideDialog();
                        clearData()
                    }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Dialog.Title style={{ textAlign: 'center' }}>{currentMealData.name}</Dialog.Title>
                        <Divider style={{ backgroundColor: colors.onSurface, marginVertical: 10 }} />
                    </View>
                    <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        <Dialog.Content>
                            <Paragraph style={{ fontSize: 17, lineHeight: 25 }}>{currentMealData.nutrients}</Paragraph>
                        </Dialog.Content>
                    </View>
                    <View>
                        <Dialog.Actions style={{ alignSelf: 'center', }}>
                            <Button onPress={() => { addToOrder(user, currentMealData, currentDayData); hideDialog(); clearData() }} ><Text style={{ color: colors.primary, fontSize: 16 }}>DODAJ NARUDŽBU</Text></Button>
                        </Dialog.Actions>
                    </View>
                </Dialog>
            </Portal>
        </View>
    );
};

export default OrderDialog
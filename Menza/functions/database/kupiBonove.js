import firestore from '@react-native-firebase/firestore';

async function kupiBonove(dorucak, rucak, vecera, user, clearData) {
  try {
    switch (user.nacinFinansiranja) {
      case 'Budžet': {
        if (dorucak * 40 + rucak * 72 + vecera * 59 < user.stanjeRacuna) {
          await firestore()
            .collection('users')
            .doc(user.userID)
            .update({
              brojDoruckova: user.brojDoruckova + dorucak,
              brojRuckova: user.brojRuckova + rucak,
              brojVecera: user.brojVecera + vecera,
              stanjeRacuna:
                user.stanjeRacuna - (dorucak * 40 + rucak * 72 + vecera * 59),
            });
        } else {
          alert('Nemate dovoljno sredstava za kupovinu!');
        }
        break;
      }

      case 'Samofinansiranje': {
        if (dorucak * 105 + rucak * 225 + vecera * 185 < user.stanjeRacuna) {
          await firestore()
            .collection('users')
            .doc(user.userID)
            .update({
              brojDoruckova: user.brojDoruckova + dorucak,
              brojRuckova: user.brojRuckova + rucak,
              brojVecera: user.brojVecera + vecera,
              stanjeRacuna:
                user.stanjeRacuna -
                (dorucak * 105 + rucak * 225 + vecera * 185),
            });
        } else {
          alert('Nemate dovoljno sredstava za kupovinu!');
        }
        break;
      }
    }
  } catch (e) {
    console.error(e);
    alert('Neuspešno!');
  } finally {
    clearData();
  }
}

export default kupiBonove;

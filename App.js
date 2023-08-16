import { Text, StyleSheet, Image, View, ScrollView } from 'react-native';



export default function App() {
  return (

    <View style={styles.container}>
    <View style={styles.navbar}>
      <Text style={styles.paragraph}>
        with cake  :)
      </Text>
    </View>
  <ScrollView>
   <View style={styles.sla}>
      <Image 
      style={styles.fotoDesc}
      resizeMode='contain'
      source={require('./assets/confeitarias.webp')}/>
    </View>

    <View style={styles.navbar1}>
        <Text style={styles.paragraph}>
            para tornar o seu dia mais doce!
        </Text>
    </View>

    <View style={styles.sla}>
        <Text style={styles.texto2}>
            bolos recheados
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/florestanegra.png')}/>
        <Text style={styles.desc}>
          Bolo de Floresta Negra
        </Text>
         <Text style={styles.desc}>
          Preço: R$86,10 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/frutas-removebg-preview.png')}/>
        <Text style={styles.desc}>
          Bolo de Frutas
        </Text>
         <Text style={styles.desc}>
          Preço: R$95,00 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/morango.png')}/>
        <Text style={styles.desc}>
          Bolo de Morango
        </Text>
         <Text style={styles.desc}>
          Preço: R$80,00 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/ninhoNutella.png')}/>
        <Text style={styles.desc}>
            Bolo de Ninho com Nutella
        </Text>
         <Text style={styles.desc}>
          Preço: R$110,00 1Kg
        </Text>
    </View>

     <View style={styles.sla}>
        <Text style={styles.texto2}>
            bolos simples
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/banana.jpg')}/>
        <Text style={styles.desc}>
            Bolo de Banana
        </Text>
         <Text style={styles.desc}>
          Preço: R$30,00 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/bolo-de-limao.jpeg')}/>
        <Text style={styles.desc}>
            Bolo de Limão
        </Text>
         <Text style={styles.desc}>
          Preço: R$40,00 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/cenoura.png')}/>
        <Text style={styles.desc}>
            Cenoura com Chocolate
        </Text>
         <Text style={styles.desc}>
          Preço: R$25,00 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/MESC.jpg')}/>
        <Text style={styles.desc}>
            Bolo Mesclado
        </Text>
         <Text style={styles.desc}>
          Preço: R$25,00 1Kg
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/laranja.jpg')}/>
        <Text style={styles.desc}>
            Bolo de Laranja
        </Text>
         <Text style={styles.desc}>
          Preço: R$30,00 1Kg
        </Text>
    </View>

    <View style={styles.sla}>
        <Text style={styles.texto2}>
              sonhos de padaria
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/Creme2.jpg')}/>
        <Text style={styles.desc}>
            Sonho de Creme
        </Text>
         <Text style={styles.desc}>
          Preço: R$4,00
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/sonhoDoceLeite.jpg')}/>
        <Text style={styles.desc}>
            Sonho de Doce de Leite
        </Text>
        <Text style={styles.desc}>
          Preço: R$4,00
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/Goiabadaaa')}/>
        <Text style={styles.desc}>
            Sonho de Goiabada
        </Text>
         <Text style={styles.desc}>
          Preço: R$4,00
        </Text>
    </View>

    <View style={styles.cont}>
      <Image 
      style={styles.fotos}
      resizeMode='center'
       source={require('./assets/sonhoNInhoNutella.jpg')}/>
        <Text style={styles.desc}>
            Sonho de Ninho com Nutella
        </Text>
         <Text style={styles.desc}>
          Preço: R$6,00
        </Text>
    </View>

     </ScrollView>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFE4E1',
    padding: 0,
  },
  paragraph: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#fff'
  },
  navbar1:
  {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#fff',
    backgroundColor:'#8B4726',
    justifyContent:'flex-start',
    marginBottom: 30
  },
  cont:
  {
    backgroundColor:'#A0522D',
    width: 300,
    height: 400,
    borderRadius: 20,
    marginBottom: 25,
    margin: 45,
    
  },
  navbar:
  {
    backgroundColor:'#8B4726',
    justifyContent:'flex-start',
    marginTop:30,

  },
  texto2:
  {
    margin: 20,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#8B4726',
  },
  fotoDesc:
  {
    width: 650,
    height: 300,
    left: -130,
  },
  
  fotos:
  {
    width: 250,
    height: 300,
    marginLeft: 25,
    marginRight: 25,
  },
  desc:
  {
    fontFamily: 'times new roman',
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.8,
    paddingTop: 5,
  }
});

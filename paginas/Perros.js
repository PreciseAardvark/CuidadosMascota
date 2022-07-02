import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
const Stack = createNativeStackNavigator;

const Perros = (navigation) => {
  return (
    <View>
      <Text>
        Cómo cuidar a un perro Cuidar a un perro implica compromiso y
        atención. En general, es importante procurar una alimentación saludable
        para ellos, así como favorecer su actividad física y estimular su
        socialización. También es fundamental ofrecerle cuidados y revisiones
        veterinarias para controlar su estado de salud y mejorar su calidad de
        vida. Si se trata de un cachorro recién nacido, los cuidados del
        perro serán continuos, incluyendo el amamantamiento con leche materna o
        sustitutivo, y el destete, que se inicia a partir de las cuatro semanas
        de vida y de forma progresiva. Mientras que, si se trata de un perro de
        edad más avanzada que adoptamos en casa, hay algunas indicaciones a
        tener en cuenta, como darle mucho cariño, seguridad y comprensión. Y en
        este caso, lo mejor es sacarle en paseos cortos y frecuentes para que se
        vaya habituando poco a poco a su nueva rutina fuera de la protectora o
        refugio.{" "}
      </Text>
    </View>
  );
};
export default Perros;

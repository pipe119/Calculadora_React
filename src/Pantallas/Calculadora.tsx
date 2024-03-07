import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export const Calculadora = () => {
  const [resultado, setResultado] = useState('0');

  const manejoBotonPresionado = (botonPresionado: string) => {
    setResultado(resultado + botonPresionado);
  };

  const borrarResultado = () => {
    setResultado('');
  };

  const calcularResultado = () => {
    try {
      setResultado(eval(resultado));
    } catch (error) {
      setResultado('Error');
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.resultado}>{resultado}</Text>
      <View style={estilos.fila}>
        <FAB
          style={estilos.boton}
          small
          label="1"
          color='white'
          onPress={() => manejoBotonPresionado('1')}
        />
        <FAB
          style={estilos.boton}
          small
          label="2"
          color='white'
          onPress={() => manejoBotonPresionado('2')}
        />
        <FAB
          style={estilos.boton}
          small
          label="3"
          color='white'
          onPress={() => manejoBotonPresionado('3')}
        />
        <FAB
          style={estilos.boton}
          small
          label="+"
          color='white'
          onPress={() => manejoBotonPresionado('+')}
        />
      </View>
      <View style={estilos.fila}>
        <FAB
          style={estilos.boton}
          small
          label="4"
          color='white'
          onPress={() => manejoBotonPresionado('4')}
        />
        <FAB
          style={estilos.boton}
          small
          label="5"
          color='white'
          onPress={() => manejoBotonPresionado('5')}
        />
        <FAB
          style={estilos.boton}
          small
          label="6"
          color='white'
          onPress={() => manejoBotonPresionado('6')}
        />
        <FAB
          style={estilos.boton}
          small
          label="-"
          color='white'
          onPress={() => manejoBotonPresionado('-')}
        />
      </View>
      <View style={estilos.fila}>
        <FAB
          style={estilos.boton}
          small
          label="7"
          color='white'
          onPress={() => manejoBotonPresionado('7')}
        />
        <FAB
          style={estilos.boton}
          small
          label="8"
          color='white'
          onPress={() => manejoBotonPresionado('8')}
        />
        <FAB
          style={estilos.boton}
          small
          label="9"
          color='white'
          onPress={() => manejoBotonPresionado('9')}
        />
        <FAB
          style={estilos.boton}
          small
          label="*"
          color='white'
          onPress={() => manejoBotonPresionado('*')}
        />
      </View>
      <View style={estilos.fila}>
        <FAB
          style={estilos.boton}
          small
          label="C"
          color='white'
          onPress={borrarResultado}
        />
        <FAB
          style={estilos.boton}
          small
          label="0"
          color='white'
          onPress={() => manejoBotonPresionado('0')}
        />
        <FAB
          style={estilos.boton}
          small
          label="."
          color='white'
          onPress={() => manejoBotonPresionado('.')}
        />
        <FAB
          style={estilos.boton}
          small
          label="="
          color='white'
          onPress={calcularResultado}
        />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 300
  },
  resultado: {
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 10,
    color: 'white'
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boton: {
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: 'orange',
    borderRadius: 40,
  },
});


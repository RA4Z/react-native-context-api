import { Text, View, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { estilos } from './estilos';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {

  const { temaEscolhido } = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)

  const { usuario } = useContext(AutenticacaoContext)
  const { quantidade, precoTotal, finalizarCompra } = useContext(ProdutosContext)

  function encerrarCompra() {
    finalizarCompra()
    navigation.navigate('Principal')
    Alert.alert('Compra Finalizada com Sucesso')
  }

  return (
    <View style={estilo.container}>
      <StatusBar />

      <View style={estilo.infoEntrega}>
        <Text style={estilo.titulo}>Informações de entrega</Text>
        <Text style={estilo.texto}>Nome: {usuario?.nome}</Text>
        <Text style={estilo.texto}>Endereço: {usuario?.endereco}</Text>
        <Text style={estilo.texto}>E-mail: {usuario?.email}</Text>
        <Text style={estilo.texto}>Telefone: {usuario?.telefone}</Text>
      </View>

      <View>
        <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
        <Text style={estilo.texto}>Preço: {precoTotal}</Text>
      </View>

      <TouchableOpacity style={estilo.botao} onPress={() => encerrarCompra()}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>

    </View>
  );
}


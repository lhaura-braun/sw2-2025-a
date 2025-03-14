import { NextResponse  } from "next/server"; //o NextResponse ajuda a decidir o que fazer com quem está entrando na loja (quem está acessando o site). Se for necessário, ele pode até mudar o caminho para que a pessoa chegue onde deve.

export async function GET(){ 
    return NextResponse.json({mensagem : "Olá Mundo!!!"})
} //É como se fosse um bilhete de boas-vindas que o servidor está entregando para quem pergunta por informações!
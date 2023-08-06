import * as S from './Main.styles'

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="imagem de um atomo e React Avançado escrito ao lado"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScrip, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="imagem de um atomo e React Avançado escrito ao lado"
      />
    </S.Wrapper>
  )
}

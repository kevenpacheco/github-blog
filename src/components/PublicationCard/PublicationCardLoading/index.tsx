import * as S from "./styles";

export function PublicationCardLoading() {
  return (
    <S.PublicationCardLoadingContainer>
      <header>
        <span className="loading">.</span>

        <h3 className="loading">.</h3>
      </header>

      <div className="content">
        <p className="loading">.</p>
        <p className="loading">.</p>
        <p className="loading">.</p>
        <p className="loading">.</p>
      </div>
    </S.PublicationCardLoadingContainer>
  );
}

import * as S from "./styles";

export function ProfileCardLoading() {
  return (
    <S.ProfileCardLoadingContainer data-testid="Profile-card-loading-component">
      <div className="img loading" />

      <div className="content">
        <header>
          <h2 className="loading">.</h2>

          <a className="loading">.</a>
        </header>

        <p className="loading">.</p>
        <p className="loading">.</p>

        <footer>
          <span className="loading">.</span>

          <span className="loading">.</span>

          <span className="loading">.</span>
        </footer>
      </div>
    </S.ProfileCardLoadingContainer>
  );
}

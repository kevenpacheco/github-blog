import * as S from "./styles";

export function PublicationLoading() {
  return (
    <>
      <S.PublicationLoadingHeaderContainer>
        <div>
          <span className="loading">.</span>
          <span className="loading">.</span>
        </div>

        <h2 className="loading">.</h2>

        <div>
          <span className="loading">.</span>
          <time className="loading">.</time>
          <span className="loading">.</span>
        </div>
      </S.PublicationLoadingHeaderContainer>

      <S.PublicationLoadingContent>
        <p className="loading">.</p>
        <p className="loading">.</p>
        <p className="loading">.</p>
      </S.PublicationLoadingContent>
    </>
  );
}

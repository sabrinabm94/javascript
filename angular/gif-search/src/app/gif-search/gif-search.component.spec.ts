//fdescribe
//vai só rodar todos os testes 9it) que existen dentro deste describe

fdescribe('GifSearchService', () => {
  it("2 deveria ser igual a 2", () => {
    //entrada
    let a = 0;

    //processamento
    a = 0 + 1;

    //saída: resultado esperado
    expect(a).toBe(2);
  });
});

//ng test
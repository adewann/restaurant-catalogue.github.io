const itActsAsFavoriteRestoItem = (favoriteResto) => {
  // eslint-disable-next-line no-undef
  it('Should return the resto that has been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(1)).toEqual({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(2)).toEqual({ id: 2 });
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(3)).toEqual(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should refuse a Resto from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('can return all of the Restos that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  // eslint-disable-next-line no-undef
  it('should remove favorite Resto', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  // eslint-disable-next-line no-undef
  it('should handle request to remove a Resto even though the Resto has not been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoItem };

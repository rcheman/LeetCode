const canPlaceFlowers = require ('../canPlaceFlowers')

test('Returns true when given an array with one spot and asked for one spot', () => {
    const bed = [1,0,0,0,1]
    expect(canPlaceFlowers(bed, 1)).toBeTruthy()
})

test('Returns false when given an array with one spot but asked for two spots', () => {
    const bed = [1,0,0,0,1]
    expect(canPlaceFlowers(bed, 2)).toBeFalsy()
})

test('Returns correct answer when there is one spot and it asks for one spot', () => {
    expect(canPlaceFlowers([0], 1)).toBeTruthy()
    expect(canPlaceFlowers([1], 0)).toBeTruthy()
})

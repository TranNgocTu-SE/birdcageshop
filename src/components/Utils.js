const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

export const returnPaginationRange = (totalPage,page,limit,siblings) => {
    let totalPageNoInArray = 7 + siblings;
    if(totalPageNoInArray >= totalPage){
        return arrayRange(1,totalPage + 1,1)
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page - siblings, totalPage);
    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;
    if(!showLeftDots && showRightDots) {
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = arrayRange(1,leftItemsCount +1,1);
        return [...leftRange, "...",totalPage];
    }else if(showLeftDots && !showRightDots){
        let rightItemsCount = 3 + 2 * siblings;
        let rightRange = arrayRange(totalPage - rightItemsCount + 1,totalPage + 1,1);
        return [1, "...",...rightRange];
    }else {
        let middleRange = arrayRange(leftSiblingsIndex,rightSiblingsIndex + 1,1);
        return [1, "...",...middleRange,"...",totalPage];
    }
}
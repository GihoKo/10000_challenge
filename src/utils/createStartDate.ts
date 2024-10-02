const createStartDate = () => {
    // 오늘 날짜를 "YYYY-MM-DD" 형식으로 반환

    const startDate = new Date();
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, "0");
    const day = String(startDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export default createStartDate;

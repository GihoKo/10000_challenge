const formatDate = (date: string) => {
    // DATE 자료형으로 저장 ex) YYYY-MM-DD
    const newDate = new Date(date);

    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const day = String(newDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};

export default formatDate;

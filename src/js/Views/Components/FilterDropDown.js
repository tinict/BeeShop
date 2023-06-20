const FilterDropDown = () => {
    return (
        <div className="Filter">
            <div className="Filer-container">
                <span className="Filter__Notification">Hiển thị 14 kết quả</span>
                <select name="Filter__Select" id="Filter__Select">
                    <option value="newProduct">Mới nhất</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    );
};

export default FilterDropDown;

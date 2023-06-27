const FilterDropDown = () => {
    return (
        <div className="Filter">
            <div className="Filer-container">
                <span className="Filter__Notification">Hiển thị 14 kết quả</span>
                <select name="Filter__Select" id="Filter__Select">
                    <option value="newProduct">New Product</option>
                </select>
            </div>
        </div>
    );
};

export default FilterDropDown;

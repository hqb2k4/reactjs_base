const BnousComponent = () => {
    return (
        <div>
            <h2>email: Hoangquocbao4102k4@gmail.com</h2>
        </div>
    );
}

const SecondComponent = () => {
    const message = "Xin chào";
    const student = {
        name: "Hoàng Quốc Bảo",
        age: 21,
        address: "Hà Nội",
    }
    return (
        <>
            <h1>{message}</h1>
            <h2>{JSON.stringify(student)}</h2>
        </>
    );
}
export {SecondComponent, BnousComponent} ;
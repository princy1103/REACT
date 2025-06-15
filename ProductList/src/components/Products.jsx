
export const Products = () => {
    return (
        <>
            <ProductList />
        </>
    )
}
const ProductList = () => {
    return (
        <>
            <ul>
                <ProductName pname="Air Conditioner" quentity="5" productType="Electronic" price="45000" />
                <ProductName pname="Fridge" quentity="4" productType="Electronic" price="34000" />
                <ProductName pname="Games" quentity="5" productType="InDoorGames" price="24000" />
                <ProductName pname="Speaker" quentity="5" productType="Electronic" price="14000" />
                <ProductName pname="Chair" quentity="3" productType="Furniture" price="5000" />
            </ul>
        </>
    )

}
const ProductName = ({ pname, productType, quentity, price }) => {
    if (quentity >= "5") {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td>{pname}</td>
                            <td>{productType}</td>
                            <td>{price}</td>
                            <td>Available</td>
                            <td><a href="#">BUY</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    else {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td>{pname}</td>
                            <td>{productType}</td>
                            <td>{price}</td>
                            <td>Not Available</td>
                            <td><a href="#">-</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

}
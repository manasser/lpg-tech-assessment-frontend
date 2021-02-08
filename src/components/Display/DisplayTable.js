import React from 'react';

const useSortableData = (items, config = null) => {
    /* source: https://www.smashingmagazine.com/2020/03/sortable-tables-react/ */

    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;

    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <table id="product-table">
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}
                        >
                        Name
                        </button>
                    </th>

                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('categoryName')}
                            className={getClassNamesFor('categoryName')}
                        >
                        Category
                        </button>
                    </th>

                    <th>Description</th>
                    <th>Creation Date</th>
                    <th>Update Date</th>
                    <th>Last Purchased Date</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.categoryName}</td>
                        <td>{item.description}</td>
                        <td>{item.creationDate}</td>
                        <td>{item.updateDate}</td>
                        <td>{item.lastPurchasedDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

function DisplayTable(props) {
    const { products } = props

    return (
        <div>
            <ProductTable products={products} />
        </div>
    );
}

export default DisplayTable

import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { selectCategoriesMapIsLoading } from '../../store/categories/categories.selector';
import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext); Using Context library but now below we are using reducer using the redux library
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading =useSelector(selectCategoriesMapIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {
        isLoading ? <Spinner /> : <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
      }

    </Fragment>
  );
};

export default Category;

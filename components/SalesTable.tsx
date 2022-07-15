import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Item, SalesData } from '@/types/index';
import { useAppSelector } from '@/app/hooks';
import { ChevronDownIcon } from '@chakra-ui/icons';

type Props = {};

function SalesTable({}: Props) {
  const { data } = useAppSelector((state) => state.data);

  let sales: SalesData[] = [];

  //Gets sales information from the data store for current item
  data.map((item: Item) => {
    sales = item.sales;
  });

  return (
    <Flex bg='white' color='black' boxShadow={'md'}>
      <TableContainer w='100%'>
        <Table
          variant={'simple'}
          colorScheme='gray.100'
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          <Thead>
            <Tr>
              <Th>
                <Button
                  px='-4'
                  mx='-4'
                  bg='none'
                  rightIcon={<ChevronDownIcon color={'gray.400'} />}
                >
                  <Text
                    fontWeight={400}
                    textTransform='uppercase'
                    color={'gray.600'}
                  >
                    Week Ending
                  </Text>
                </Button>
              </Th>
              <Th>
                <Button
                  px='-4'
                  mx='-4'
                  bg='none'
                  float={'right'}
                  rightIcon={<ChevronDownIcon color={'gray.400'} />}
                >
                  <Text
                    fontWeight={400}
                    textTransform='uppercase'
                    color={'gray.600'}
                  >
                    Retail Sales
                  </Text>
                </Button>
              </Th>
              <Th>
                <Button
                  px='-4'
                  mx='-4'
                  bg='none'
                  float={'right'}
                  rightIcon={<ChevronDownIcon color={'gray.400'} />}
                >
                  <Text
                    fontWeight={400}
                    textTransform='uppercase'
                    color={'gray.600'}
                  >
                    Wholesale Sales
                  </Text>
                </Button>
              </Th>
              <Th>
                <Button
                  px='-4'
                  mx='-4'
                  bg='none'
                  float={'right'}
                  rightIcon={<ChevronDownIcon color={'gray.400'} />}
                >
                  <Text
                    fontWeight={400}
                    textTransform='uppercase'
                    color={'gray.600'}
                  >
                    Units Sold
                  </Text>
                </Button>
              </Th>
              <Th>
                <Button
                  px='-4'
                  mx='-4'
                  bg='none'
                  float={'right'}
                  rightIcon={<ChevronDownIcon color={'gray.400'} />}
                >
                  <Text
                    fontWeight={400}
                    textTransform='uppercase'
                    color={'gray.600'}
                  >
                    Retailer Margin
                  </Text>
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody color='gray.400'>
            {sales.map((sale: SalesData, i) => (
              <Tr key={sale.weekEnding}>
                <Td>{sale.weekEnding}</Td>
                <Td isNumeric={true}>{sale.retailSales}</Td>
                <Td isNumeric={true}>{sale.wholesaleSales}</Td>
                <Td isNumeric={true}>{sale.unitsSold}</Td>
                <Td isNumeric={true}>{sale.retailerMargin}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default SalesTable;

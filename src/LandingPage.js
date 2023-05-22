import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Grid,
  Spinner,
  Select,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Loading } from './Loading';

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: '',
    originalLaunch: '',
    type: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/capsules');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleResetFilters = () => {
    setFilters({ status: '', originalLaunch: '', type: '' });
    setCurrentPage(1);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const filterCapsules = () => {
    let filteredData = data;

    if (filters.status) {
      filteredData = filteredData.filter(
        capsule => capsule.status === filters.status
      );
    }

    if (filters.type) {
      filteredData = filteredData.filter(
        capsule => capsule.type === filters.type
      );
    }

    return filteredData;
  };

  const sortCapsules = capsules => {
    if (filters.originalLaunch === 'dateAsc') {
      return capsules.sort(
        (a, b) => new Date(a.original_launch) - new Date(b.original_launch)
      );
    }

    if (filters.originalLaunch === 'dateDesc') {
      return capsules.sort(
        (a, b) => new Date(b.original_launch) - new Date(a.original_launch)
      );
    }

    return capsules;
  };

  const paginate = capsules => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return capsules.slice(indexOfFirstItem, indexOfLastItem);
  };

  const handlePageChange = pageNumber => {
    setLoading(true); // Show loading component during pagination
    setCurrentPage(pageNumber);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const renderPagination = () => {
    const capsules = filterCapsules();
    const totalItems = capsules.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <Flex justifyContent="center" mt={4}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            mx={1}
            colorScheme={currentPage === index + 1 ? 'blue' : 'gray'}
            onClick={() => handlePageChange(index + 1)}
            backgroundColor={'white'}
            color={'black'}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>
    );
  };

  return (
    <Box p={4}>
      <Flex
        direction={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="space-evenly"
        mb={4}
        gap={'50px'}
      >
        {/* Filter options */}
        <Select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          placeholder="All Status"
          mb={[2, 2, 0]}
          mr={[0, 0, 2]}
          variant={'flushed'}
        >
          <option themee value="active">
            Active
          </option>
          <option value="retired">Retired</option>
        </Select>
        <Select
          name="originalLaunch"
          value={filters.originalLaunch}
          onChange={handleFilterChange}
          placeholder="Sort by Original Launch"
          mb={[2, 2, 0]}
          mr={[0, 0, 2]}
          variant={'flushed'}
        >
          <option value="dateAsc">Date (Ascending)</option>
          <option value="dateDesc">Date (Descending)</option>
        </Select>
        <Select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          placeholder="All Types"
          mb={[2, 2, 0]}
          variant={'flushed'}
        >
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
          {/* Add more options based on the available types */}
        </Select>
        <Button
          backgroundColor={'white'}
          color={'black'}
          ml={5}
          pl={10}
          pr={10}
          onClick={handleResetFilters}
        >
          Reset Filter
        </Button>
      </Flex>
      {loading ? (
        <Loading /> // Show loading component if data is still being fetched
      ) : (
        <>
          {/* Display capsules */}
          <Grid
            templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
            gap={4}
            mt={[6, null, 10]}
          >
            {paginate(sortCapsules(filterCapsules())).map(capsule => (
              <Box
                key={capsule.capsule_serial}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
              >
                <Flex
                  justifyContent={'space-evenly'}
                  gap={'20px'}
                  alignItems="center"
                >
                  <Box>
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/COTS-1_Dragon_After_Return_from_Orbit_%28crop%29.jpg/300px-COTS-1_Dragon_After_Return_from_Orbit_%28crop%29.jpg"
                      alt="Capsule"
                      boxSize="150px"
                      mb={2}
                    />
                  </Box>
                  <Box>
                    <Text fontWeight="bold">
                      Serial: {capsule.capsule_serial}
                    </Text>
                    <Text>Status: {capsule.status}</Text>
                    <Text>Type: {capsule.type}</Text>
                    <Text>
                      Original Launch:{' '}
                      {new Date(capsule.original_launch).toLocaleDateString()}
                    </Text>
                    <Text>
                      Original Launch Time:{' '}
                      {new Date(capsule.original_launch).toLocaleTimeString(
                        [],
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>
          {renderPagination()} {/* Display pagination component */}
        </>
      )}
    </Box>
  );
};

export default LandingPage;

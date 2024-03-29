import React, { useState } from "react";
import { Box, VStack, HStack, Image, Text, IconButton, Button, Input } from "@chakra-ui/react";
import { FaHeart, FaPlus, FaUser } from "react-icons/fa";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [images, setImages] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzExNjg0NDM1fDA&ixlib=rb-4.0.3&q=80&w=1080", likes: 10 },
    { id: 2, url: "https://images.unsplash.com/photo-1604725333736-1f962a6218d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzdW5zZXR8ZW58MHx8fHwxNzExNjg0NDM2fDA&ixlib=rb-4.0.3&q=80&w=1080", likes: 25 },
    { id: 3, url: "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNjZW5lcnl8ZW58MHx8fHwxNzExNjg0NDM3fDA&ixlib=rb-4.0.3&q=80&w=1080", likes: 15 },
  ]);
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleLike = (id) => {
    setImages((prevImages) => prevImages.map((image) => (image.id === id ? { ...image, likes: image.likes + 1 } : image)));
  };

  const handleAddImage = () => {
    if (newImageUrl) {
      const newImage = {
        id: images.length + 1,
        url: newImageUrl,
        likes: 0,
      };
      setImages((prevImages) => [...prevImages, newImage]);
      setNewImageUrl("");
    }
  };

  const renderHomePage = () => (
    <VStack spacing={4}>
      {images.map((image) => (
        <Box key={image.id} position="relative">
          <Image src={image.url} alt="Nature" objectFit="cover" />
          <HStack position="absolute" bottom={2} right={2}>
            <IconButton icon={<FaHeart />} size="sm" onClick={() => handleLike(image.id)} />
            <Text>{image.likes}</Text>
          </HStack>
        </Box>
      ))}
    </VStack>
  );

  const renderAddImagePage = () => (
    <VStack spacing={4}>
      <Input placeholder="Enter image URL" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} />
      <Button leftIcon={<FaPlus />} onClick={handleAddImage}>
        Add Image
      </Button>
    </VStack>
  );

  const renderProfilePage = () => (
    <VStack spacing={4}>
      <FaUser size={48} />
      <Text>Profile Page</Text>
    </VStack>
  );

  return (
    <Box>
      {currentPage === 0 && renderHomePage()}
      {currentPage === 1 && renderAddImagePage()}
      {currentPage === 2 && renderProfilePage()}
      <HStack justify="space-around" mt={4}>
        <IconButton icon={<FaHeart />} onClick={() => setCurrentPage(0)} variant={currentPage === 0 ? "solid" : "ghost"} />
        <IconButton icon={<FaPlus />} onClick={() => setCurrentPage(1)} variant={currentPage === 1 ? "solid" : "ghost"} />
        <IconButton icon={<FaUser />} onClick={() => setCurrentPage(2)} variant={currentPage === 2 ? "solid" : "ghost"} />
      </HStack>
    </Box>
  );
};

export default Index;

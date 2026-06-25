// "use client";
// import { useState } from "react";

// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Grid,
//   GridItem,
//   Image,
//   Textarea,
//   Input,
//   VStack,
// } from "@chakra-ui/react";
// import BaseLayout from "@/components/Wrapper/BaseLayout";
// import BaseText from "@/components/Wrapper/BaseText";
// import PageLayout from "@/components/layouts/PageLayout";
// import { ToastContainer } from "react-toastify";
// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }
// const Contact = () => {

 
// const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [result, setResult] = useState<{
//     success: boolean;
//     message: string;
//   } | null>();

//   const handleChange = (
//     event: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement
//     >
//   ) => {
//     setFormData({
//       ...formData,
//       [event.target.id]: event.target.value,
//     });
//   };

//   const onSubmit = async (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setResult({
//       success: true,
//       message: "sending.....",
//     });

//     const body = {
//       ...formData,
//       access_key:  "1b32e9c7-08cf-4c0b-8915-9ac224f3592e"
//     };
//     const response = await fetch(
//       "https://api.web3forms.com/submit",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(body),
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       setResult({
//         success: true,
//         message: "Form Submitted Successfully",
//       });
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } else {
//       console.log("Error", data);
//       setResult({
//         success: false,
//         message: data.message,
//       });
//     }
//   };


//   return (
//     <PageLayout>
//       <BaseLayout>
//           <BaseText
//             firstTitle="Contact"
//             secondTitle="Freelancer"
//             textIcon="https://ik.imagekit.io/ayushsoni1010/Website/contact?ik-sdk-version=javascript-1.4.3&updatedAt=1669666339518"
//             leftSpacing={4}
//           />
//           <Grid
//             display={{
//               base: "grid",
//               md: "grid",
//               lg: "grid",
//               sm: "block",
//               xs: "block",
//             }}
//             templateColumns={{
//               md: "repeat(2, 1fr)",
//               lg: "repeat(2, 1fr)",
//             }}
//             gap={4}
//             my="10"
//             alignItems="center"
//           >
//             <GridItem>
//               <Image
//                 src="/contact.svg"
//                 alt="contact-hero"
//                 w="300px"
//                 my={{ base: 10, lg: 10, md: 10, sm: 20, xs: 20 }}
//                 borderRadius="10px"
//               />
//             </GridItem>
//             <GridItem
//               maxW="md"
//               mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
//             >
//               <Box borderRadius="10px" boxShadow="lg">
//                 <form>
//                   <VStack p="10">
//                     <FormControl
                
//                     >
//                       <FormLabel htmlFor="Name">Name</FormLabel>
//                       <Input
//                         type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
                
//                       />
                     
//                     </FormControl>

//                     <FormControl>
//                       <FormLabel htmlFor="Email">Email</FormLabel>
//                       <Input
//                         type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//                         required
                     
//                       />
                     
//                     </FormControl>

//                     <FormControl
                    
//                     >
//                       <FormLabel htmlFor="Message">Message</FormLabel>
//                       <Textarea
//                         id="message"
//               placeholder="Enter your message"
//               value={formData.message}
//               onChange={handleChange}
//                         required
                        
                
//                       />
                     
//                     </FormControl>

//                     <Button
//                     type="submit"
//                       w="full"
//                       my="4"
//                       variant="solid"
//                       colorScheme="teal"
//                       _focus={{ transform: "scale(1.02)" }}
//                     >
//                       Send email
//                     </Button>
//                   </VStack>
//                 </form>
//                 {result && (
//           <>
//             {result?.success ? (
//               <div className="bg-green-400 mt-10 p-3 rounded-lg">
//                 {result.message}
//               </div>
//             ) : (
//               <div className="bg-red-400 mt-10 p-3 rounded-lg">
//                 {result.message}
//               </div>
//             )}
//           </>
//         )}
//               </Box>
//             </GridItem>
//           </Grid>
//         </BaseLayout>
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//     </PageLayout>
//   );
// };

// export default Contact;


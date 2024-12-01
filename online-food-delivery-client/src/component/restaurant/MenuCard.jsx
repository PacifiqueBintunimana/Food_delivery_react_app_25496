import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from'@mui/icons-material/ExpandMore';

const MenuCard = () => {

    const ingredientItems = [
        {
            category: "Nuts & Seeds",
            ingredients: [
                "Cashews"
            ]
        },
        {
            category: "Protein",
            ingredients: [
                "Protein",
                "Bacon Strips"
            ],
        },
        {
            category: "Vegetables",
            ingredients: [
                "Potatoes",
                "Tomatoes",
                "Onions"
            ],
        },
        {
            category: "Dairy",
            ingredients: [
                "Milk",
                "Cheese"
            ],
        },
        {
            category: "Meat",
            ingredients: [
                "Chicken",
                "Beef"
            ],
        },
        {
            category: "Fruits",
            ingredients: [
                "Apples",
                "Oranges"
            ],
        }
    ]

    const handleCheckBoxChange = (ingredient) => {
       console.log(ingredient)
    }
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
        <div classNam='lg:flex itemd-center justify-between'>
            <div className='lg:flex item-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover'
                
                src="https://plus.unsplash.com/premium_photo-1669742928007-71b99d6ab1dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxjaGlja2VuJTIwd2luZ3N8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
<p className='font-semibold text-xl'>
    burger
</p>
<p>500 rwf</p>
<p className='text-gray-400'>jiojksuhkjhfijdsfohwsofjwjjihfhihihdhuihiuuihfiwhifio</p>
            </div>
            
</div>
    </AccordionSummary>
    <AccordionDetails>
    <form>
                        <div className=' flex gap-5 flex-wrap'>
                            {
                                ingredientItems?.map((item, key) =>
                                    <div key={key}>
                                        <p className=' font-bold text-md'>{item.category}</p>
                                        <FormGroup>
                                            {
                                                item?.ingredients?.map((ingredient, ingredientIndex) =>
                                                    <FormControlLabel key={ingredientIndex} control={<Checkbox onChange={() => handleCheckBoxChange(ingredient)}/>} label={ingredient} />
                                                )
                                            }
                                        </FormGroup>
                                    </div>
                                )
                            }
                        </div>
                        <div className=' pt-5'>
                            <Button type='submit' variant="contained" disabled={false}>{true ? "Add To Cart" : "Out Of Stock"}</Button>
                        </div>
                    </form>
      
    </AccordionDetails>
  </Accordion>
  
  )
}

export default MenuCard
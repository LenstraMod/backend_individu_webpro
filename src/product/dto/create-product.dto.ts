import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    productName : string;

    @IsString()
    productDescription : string;

    @IsNumber()
    @Min(0)
    productPrice : number;

    @IsOptional()
    @IsString()
    category? : string;

    @IsOptional()
    @IsUrl()
    imageUrl? : string;
}

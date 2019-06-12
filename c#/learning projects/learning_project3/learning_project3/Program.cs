using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learning_project3
{
    class Program
    {
        public static void Main(string[] args) // this is a method called "Main". It is called when the program starts.

        {
        start:
            Random rnd = new Random();
            int num01 = rnd.Next(0, 10);

            int num02 = rnd.Next(0,20);
            Console.WriteLine("What is " + num01 + " times " + num02 + "?");
            int answer = Convert.ToInt32(Console.ReadLine());
            if (answer == num01 * num02)
            {

                Console.WriteLine("Well done! Your answer is correct.");

            }
            else
            {
                int responseindex = rnd.Next(1, 4);
                switch (responseindex)
                {
                    case 1:
                        Console.WriteLine("are you even trying?");
                        break;
                    case 2:
                        Console.WriteLine("The answer is wrong");
                        break;
                    default:
                        Console.WriteLine("You can do better than that.");
                        break;
                }

            }
            Console.ReadKey();
            Console.WriteLine();
            goto start;
        }
    }
}
